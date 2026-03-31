import { SearchBar } from "@/shared/components/SearchBar";
import { Film } from "lucide-react";
import { appFeatures } from "../constants/AppFeatures";

export const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/*  seccion hero  */}
      <section className="relative bg-linear-to-br from-primary/5 via-background to-accent/10 px-4 py-20 sm:py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 size-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 size-72 rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-2 text-sm backdrop-blur-sm animate-fade-in">
            <Film className="size-4 text-primary" />
            <span className="text-muted-foreground">
              Descubre miles de películas y series
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-up">
            Tu explorador de{" "}
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              películas
            </span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground sm:text-xl animate-fade-up">
            Busca, explora y guarda tus películas favoritas. Información
            detallada, ratings y mucho más.
          </p>

          <div className="mx-auto max-w-2xl animate-fade-up">
            <SearchBar variant="hero" />
          </div>
        </div>
      </section>

      {/* lista de features */}
      {/* 
        esto perfectamente podria ser un componente aparte para 
        simplificar mas aun este pero de momento no esta mal asi
      */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 py-16 sm:grid-cols-3">
        {appFeatures.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center gap-3 rounded-xl border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-card-foreground">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
