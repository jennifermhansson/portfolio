// src/hooks/usePinnedRepos.ts
import { useEffect, useState } from "react";

export type PinnedRepo = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  stargazerCount: number;
  languages: { nodes: { name: string }[] };
};

export function usePinnedRepos(username: string) {
  const [repos, setRepos] = useState<PinnedRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPinned() {
      setLoading(true);
      try {
        const query = `
        {
          user(login: "${username}") {
            pinnedItems(first: 6, types: [REPOSITORY]) {
              nodes {
                ... on Repository {
                  id
                  name
                  description
                  url
                  homepageUrl
                  stargazerCount
                  languages(first: 3) {
                    nodes { name }
                  }
                }
              }
            }
          }
        }`;

        const res = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        });

        const json = await res.json();
        const pinned = json.data?.user?.pinnedItems?.nodes ?? [];
        setRepos(pinned);
      } catch (err) {
        setError("Could not fetch pinned repositories");
      } finally {
        setLoading(false);
      }
    }

    fetchPinned();
  }, [username]);

  return { repos, loading, error };
}
