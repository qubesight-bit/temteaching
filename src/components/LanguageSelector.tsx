import { useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useLanguage, languages, Language } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageSelectorProps {
  variant?: "default" | "minimal";
}

export function LanguageSelector({ variant = "default" }: LanguageSelectorProps) {
  const { language, setLanguage, currentLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleSelect = (langCode: Language) => {
    setLanguage(langCode);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn(
            "gap-2 font-medium",
            variant === "minimal" && "px-2"
          )}
        >
          <span className="text-lg">{currentLanguage.flag}</span>
          {variant === "default" && (
            <>
              <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
              <ChevronDown className="w-4 h-4 opacity-50" />
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-56 max-h-80 overflow-y-auto bg-popover z-50"
      >
        <DropdownMenuLabel className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          {t("language.select")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            className={cn(
              "flex items-center justify-between cursor-pointer",
              language === lang.code && "bg-primary/10"
            )}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{lang.flag}</span>
              <div>
                <span className="font-medium">{lang.nativeName}</span>
                <span className="text-xs text-muted-foreground ml-2">
                  ({lang.name})
                </span>
              </div>
            </div>
            {language === lang.code && (
              <Check className="w-4 h-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
