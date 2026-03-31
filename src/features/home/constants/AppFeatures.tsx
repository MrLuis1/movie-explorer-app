import { Clapperboard, Star, TrendingUp } from "lucide-react";
import type { AppFeature } from "../types/home";

export const appFeatures: AppFeature[] = [
  {
    icon: <TrendingUp className="size-6" />,
    title: "Búsqueda rápida",
    description:
      "Encuentra cualquier película o serie al instante con nuestro buscador.",
  },
  {
    icon: <Star className="size-6" />,
    title: "Favoritos",
    description:
      "Guarda tus películas favoritas y accede a ellas cuando quieras.",
  },
  {
    icon: <Clapperboard className="size-6" />,
    title: "Info detallada",
    description:
      "Ratings, directores, actores, premios y mucho más en cada película.",
  },
];
