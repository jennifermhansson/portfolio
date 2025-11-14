import { useEffect, useState } from "react";

export interface PinnedRepo {
  repo: string;
  owner: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  link: string;
}

export default function usePinnedRepos() {
  const [repos, setRepos] = useState<PinnedRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPinned() {
      try {
        const res = await fetch(
          "https://gh-pinned-repos.egoist.dev/?username=jennifermhansson"
        );
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        console.error("Failed to load pinned repos", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPinned();
  }, []);

  return { repos, loading };
}
