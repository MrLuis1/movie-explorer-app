import { useSearchHistoryStore } from "@/features/search/store/search-history-store";
import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import { MAX_SEARCH_LENGTH } from "@/shared/lib/constants";
import { cn } from "@/shared/lib/utils";
import { Search, X } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  initialQuery?: string;
  variant?: "hero" | "compact";
  onSearch?: (query: string) => void;
}

export const SearchBar = ({
  initialQuery = "",
  variant = "compact",
  onSearch,
}: SearchBarProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [showHistory, setShowHistory] = useState(false);
  const navigate = useNavigate();
  const { history, addSearch, removeSearch } = useSearchHistoryStore();

  const submitSearch = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    addSearch(trimmed);
    setShowHistory(false);
    if (onSearch) {
      onSearch(trimmed);
    } else {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    submitSearch(formData.get("query") as string);
  };

  const handleHistoryClick = (term: string) => {
    if (formRef.current) {
      const input = formRef.current.elements.namedItem(
        "query",
      ) as HTMLInputElement;
      input.value = term;
    }
    submitSearch(term);
  };

  const handleClear = () => {
    if (formRef.current) {
      const input = formRef.current.elements.namedItem(
        "query",
      ) as HTMLInputElement;
      input.value = "";
      input.focus();
    }
  };

  const isHero = variant === "hero";

  return (
    <div className="relative w-full">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={cn(
          "flex gap-2",
          isHero ? "flex-col sm:flex-row" : "flex-row",
        )}
      >
        <div className="relative flex-1">
          <Search
            className={cn(
              "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",
              isHero ? "size-5" : "size-4",
            )}
          />
          <Input
            type="text"
            name="query"
            autoComplete="off"
            defaultValue={initialQuery}
            placeholder="Buscar películas, series..."
            onFocus={() => history.length > 0 && setShowHistory(true)}
            onBlur={() => setTimeout(() => setShowHistory(false), 200)}
            maxLength={MAX_SEARCH_LENGTH}
            className={cn(
              "pl-10 pr-10 transition-all",
              isHero
                ? "h-14 rounded-xl text-lg shadow-lg focus-visible:shadow-xl"
                : "h-10 rounded-lg",
            )}
          />
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>
        <Button
          type="submit"
          className={cn(
            "transition-all",
            isHero
              ? "h-14 rounded-xl px-8 text-lg shadow-lg"
              : "h-10 rounded-lg",
          )}
        >
          <Search className="size-4" />
          Buscar
        </Button>
      </form>

      {showHistory && history.length > 0 && (
        <div className="absolute top-full z-50 mt-2 w-full rounded-xl border bg-popover p-2 shadow-lg animate-fade-in">
          <p className="mb-1 px-2 text-xs font-medium text-muted-foreground">
            Búsquedas recientes
          </p>
          {history.map((term) => (
            <button
              key={term}
              type="button"
              onMouseDown={() => handleHistoryClick(term)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
            >
              <span>{term}</span>
              <X
                className="size-3 text-muted-foreground hover:text-foreground"
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  removeSearch(term);
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
