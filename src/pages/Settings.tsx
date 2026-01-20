import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, User, Bell, Clock, Volume2, Palette, RotateCcw, AlertCircle, ChevronRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useAppState, UserProgress } from "@/hooks/useAppState";

export default function Settings() {
  const navigate = useNavigate();
  const { userProgress, setUserProgress } = useAppState();
  
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('settings');
    return saved ? JSON.parse(saved) : {
      dailyGoal: userProgress.goalMinutes,
      soundEffects: true,
      notifications: true,
      reminderTime: "09:00",
      theme: "system",
    };
  });

  const [selectedLevel, setSelectedLevel] = useState<UserProgress['currentLevel']>(userProgress.currentLevel);

  const handleSave = () => {
    // Save settings to localStorage
    localStorage.setItem('settings', JSON.stringify(settings));
    
    // Update global app state with new level
    setUserProgress({ 
      currentLevel: selectedLevel,
      goalMinutes: settings.dailyGoal 
    });
    
    toast({
      title: "Configuración guardada",
      description: `Nivel actualizado a ${selectedLevel}. Tus preferencias han sido guardadas.`,
    });
  };

  const handleReset = () => {
    const defaultSettings = {
      dailyGoal: 20,
      soundEffects: true,
      notifications: true,
      reminderTime: "09:00",
      theme: "system",
    };
    setSettings(defaultSettings);
    setSelectedLevel("A2");
    toast({
      title: "Configuración restablecida",
      description: "Se han restaurado los valores por defecto",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-2xl mx-auto">
          {/* Back Button & Title */}
          <div className="mb-8">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Dashboard
            </Button>
            
            <h1 className="font-display font-bold text-3xl text-foreground">
              Configuración
            </h1>
            <p className="text-muted-foreground">
              Personaliza tu experiencia de aprendizaje
            </p>
          </div>

          {/* Profile Section */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-5 h-5 text-primary" />
                <h2 className="font-display font-semibold text-lg">Perfil</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label>Nivel actual</Label>
                  <p className="text-xs text-muted-foreground mb-2">
                    Tu nivel actual: <span className="font-semibold text-primary">{userProgress.currentLevel}</span>
                  </p>
                  <Select 
                    value={selectedLevel} 
                    onValueChange={(value: UserProgress['currentLevel']) => setSelectedLevel(value)}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Selecciona tu nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A1">A1 - Principiante</SelectItem>
                      <SelectItem value="A2">A2 - Elemental</SelectItem>
                      <SelectItem value="B1">B1 - Intermedio</SelectItem>
                      <SelectItem value="B2">B2 - Intermedio Alto</SelectItem>
                      <SelectItem value="C1">C1 - Avanzado</SelectItem>
                    </SelectContent>
                  </Select>
                  {selectedLevel !== userProgress.currentLevel && (
                    <p className="text-xs text-amber-600 mt-2">
                      ⚠️ Cambiarás de {userProgress.currentLevel} a {selectedLevel}. Guarda para aplicar.
                    </p>
                  )}
                </div>
              </div>

              {/* Error History Link */}
              <div className="mt-6 pt-6 border-t">
                <Button 
                  variant="outline" 
                  className="w-full justify-between"
                  onClick={() => navigate("/error-history")}
                >
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-destructive" />
                    <span>Historial de Errores</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Revisa tus errores para mejorar tu aprendizaje
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Goals Section */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-primary" />
                <h2 className="font-display font-semibold text-lg">Objetivos</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Label>Meta diaria de estudio</Label>
                    <span className="text-sm font-medium">{settings.dailyGoal} min</span>
                  </div>
                  <Slider
                    value={[settings.dailyGoal]}
                    onValueChange={(value) => setSettings(prev => ({ ...prev, dailyGoal: value[0] }))}
                    min={5}
                    max={60}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>5 min</span>
                    <span>60 min</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications Section */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-5 h-5 text-primary" />
                <h2 className="font-display font-semibold text-lg">Notificaciones</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Recordatorios diarios</Label>
                    <p className="text-sm text-muted-foreground">Recibe un recordatorio para estudiar</p>
                  </div>
                  <Switch
                    checked={settings.notifications}
                    onCheckedChange={(checked) => setSettings(prev => ({ ...prev, notifications: checked }))}
                  />
                </div>
                
                {settings.notifications && (
                  <div>
                    <Label>Hora del recordatorio</Label>
                    <Select 
                      value={settings.reminderTime} 
                      onValueChange={(value) => setSettings(prev => ({ ...prev, reminderTime: value }))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecciona una hora" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="07:00">7:00 AM</SelectItem>
                        <SelectItem value="08:00">8:00 AM</SelectItem>
                        <SelectItem value="09:00">9:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Sound Section */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Volume2 className="w-5 h-5 text-primary" />
                <h2 className="font-display font-semibold text-lg">Sonido</h2>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Efectos de sonido</Label>
                  <p className="text-sm text-muted-foreground">Sonidos al completar ejercicios</p>
                </div>
                <Switch
                  checked={settings.soundEffects}
                  onCheckedChange={(checked) => setSettings(prev => ({ ...prev, soundEffects: checked }))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Theme Section */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-5 h-5 text-primary" />
                <h2 className="font-display font-semibold text-lg">Apariencia</h2>
              </div>
              
              <div>
                <Label>Tema</Label>
                <Select 
                  value={settings.theme} 
                  onValueChange={(value) => setSettings(prev => ({ ...prev, theme: value }))}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Selecciona un tema" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Claro</SelectItem>
                    <SelectItem value="dark">Oscuro</SelectItem>
                    <SelectItem value="system">Sistema</SelectItem>
                  </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleReset}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Restablecer
            </Button>
            <Button
              variant="hero"
              className="flex-1"
              onClick={handleSave}
            >
              Guardar cambios
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
