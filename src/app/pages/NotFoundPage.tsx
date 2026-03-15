import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-8xl text-[var(--brand)] font-semibold mb-4">404</div>
          <h1 className="text-3xl lg:text-4xl text-foreground font-semibold mb-4">
            Page non trouvée
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[var(--brand)] text-white px-8 py-4 rounded-xl hover:bg-[var(--brand-hover)] transition-colors text-base font-medium"
          >
            <Home size={20} />
            <span>Retour à l'accueil</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-muted text-foreground px-8 py-4 rounded-xl hover:bg-border transition-colors text-base font-medium"
          >
            <ArrowLeft size={20} />
            <span>Page précédente</span>
          </button>
        </div>
      </div>
    </div>
  );
}
