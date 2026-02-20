import { clearSearches } from "@/core/api-route/site/handlers/searchProducts/clearSearches";
import { getLatestSearches } from "@/core/api-route/site/handlers/searchProducts/getLatestSearches";
import { Button } from "@/core/components/shadcn/ui/button";
import { Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useHeader } from "../../../context/HeaderContext";

export default function RecentSearches({ userId }: { userId: string }) {
  const router = useRouter();
  const { setSearchModalOpen } = useHeader();
  const [latestSearches, setLatestSearches] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getLatest() {
      try {
        setLoading(true);
        const latest = await getLatestSearches(userId);
        setLatestSearches(latest.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getLatest();
  }, [userId]);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold flex items-center gap-2">
          <Clock className="h-4 w-4" />
          Your Recent Searches
        </h3>
        <form
          action={async () => {
            await clearSearches(userId);
            router.refresh();
            setSearchModalOpen(false);
          }}
        >
          <Button type="submit" variant="ghost" size="sm" className="text-xs">
            Clear All
          </Button>
        </form>
      </div>
      <div className="flex flex-wrap gap-2">
        {loading ? (
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            Loading...
          </div>
        ) : !latestSearches || !latestSearches.length ? (
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            You have no searches yet.
          </div>
        ) : (
          latestSearches.map((item, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={() => {
                console.log("Search:", item.text);
              }}
            >
              {item.text}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
