import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Globe, Mail, MapPin, Building2 } from "lucide-react";

const PAGE_TITLE = "Política de privacidad de QubeSight";

const contactInfo = [
  { icon: Building2, label: "Empresa", value: "QubeSight" },
  {
    icon: Globe,
    label: "Sitio web",
    value: "https://qubesight.lat",
    href: "https://qubesight.lat",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "privacy@qubesight.lat",
    href: "mailto:privacy@qubesight.lat",
  },
  { icon: MapPin, label: "País", value: "Costa Rica" },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    const previous = document.title;
    document.title = PAGE_TITLE;
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 px-4 py-10 sm:px-6">
        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-info flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
              {PAGE_TITLE}
            </h1>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                El texto definitivo de esta política será publicado por QubeSight
                en esta página. Mientras tanto, la información de contacto de
                privacidad está disponible más abajo.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="font-display font-semibold text-lg text-foreground mb-4">
                Información de contacto
              </h2>
              <ul className="space-y-4">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="font-medium text-primary hover:underline break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground break-words">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link to="/auth">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
