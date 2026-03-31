import { Film } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 text-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Film className="size-4 text-primary" />
          <span className="font-medium text-foreground">MovieExplorer</span>
        </div>
      </div>
    </footer>
  );
};
