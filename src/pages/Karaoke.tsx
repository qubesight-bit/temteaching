import { useState } from 'react';
import { Music, ArrowLeft, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { KaraokeSearch } from '@/components/karaoke/KaraokeSearch';
import { KaraokeSearchResults } from '@/components/karaoke/KaraokeSearchResults';
import { KaraokeVideoPlayer } from '@/components/karaoke/KaraokeVideoPlayer';
import { KaraokeLyrics } from '@/components/karaoke/KaraokeLyrics';
import { KaraokeScorePanel } from '@/components/karaoke/KaraokeScorePanel';
import { KaraokeSongLibrary } from '@/components/karaoke/KaraokeSongLibrary';
import { KaraokeStats } from '@/components/karaoke/KaraokeStats';
import { useKaraokePlayer } from '@/hooks/useKaraokePlayer';

export default function Karaoke() {
  const [activeTab, setActiveTab] = useState('search');
  const {
    isLoading,
    error,
    searchResults,
    currentVideo,
    lyrics,
    currentLineIndex,
    isPlaying,
    isRecording,
    userAudioUrl,
    sessionScore,
    lineScores,
    showTranslation,
    playerReady,
    searchSongs,
    selectVideo,
    play,
    pause,
    stop,
    seekTo,
    toggleRecording,
    resetSession,
    setShowTranslation,
    setError,
    handlePlayerReady,
    handlePlayerStateChange,
    handlePlayerError,
  } = useKaraokePlayer();

  const handleSearchFromLibrary = (title: string, artist: string) => {
    searchSongs(title, artist);
    setActiveTab('search');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <Music className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold">Karaoke Educativo</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Hero Section */}
        <div className="text-center space-y-2 pb-4">
          <h2 className="text-2xl font-bold">🎵 Aprende Inglés con Música 🎵</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mejora tu pronunciación, vocabulario y fluidez cantando tus canciones favoritas en inglés.
          </p>
        </div>

        {/* Stats */}
        <KaraokeStats />

        {/* Error Alert */}
        {error && (
          <Alert variant="destructive">
            <AlertDescription className="flex items-center justify-between">
              {error}
              <Button variant="ghost" size="sm" onClick={() => setError(null)}>
                Cerrar
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {/* Main Content */}
        {currentVideo && lyrics ? (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Video Player */}
            <div className="lg:col-span-2 space-y-4">
              <KaraokeVideoPlayer
                videoId={currentVideo.id.videoId}
                isPlaying={isPlaying}
                playerReady={playerReady}
                onPlay={play}
                onPause={pause}
                onStop={stop}
                onReset={resetSession}
                onPlayerReady={handlePlayerReady}
                onPlayerStateChange={handlePlayerStateChange}
                onPlayerError={handlePlayerError}
              />
              <KaraokeLyrics
                lyrics={lyrics}
                currentLineIndex={currentLineIndex}
                showTranslation={showTranslation}
                onToggleTranslation={setShowTranslation}
                onLineClick={seekTo}
              />
            </div>

            {/* Score Panel */}
            <div className="lg:col-span-1">
              <KaraokeScorePanel
                score={sessionScore}
                isRecording={isRecording}
                userAudioUrl={userAudioUrl}
                onToggleRecording={toggleRecording}
                linesCompleted={lineScores.length}
                totalLines={lyrics.lyrics.length}
              />
              <div className="mt-4">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    resetSession();
                    setActiveTab('search');
                  }}
                >
                  Elegir Otra Canción
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="search">Buscar</TabsTrigger>
              <TabsTrigger value="library">Biblioteca</TabsTrigger>
            </TabsList>

            <TabsContent value="search" className="space-y-6 mt-6">
              <KaraokeSearch onSearch={searchSongs} isLoading={isLoading} />
              <KaraokeSearchResults results={searchResults} onSelect={selectVideo} />
            </TabsContent>

            <TabsContent value="library" className="mt-6">
              <KaraokeSongLibrary onSelectSong={handleSearchFromLibrary} />
            </TabsContent>
          </Tabs>
        )}

        {/* Instructions */}
        <div className="grid md:grid-cols-3 gap-4 pt-6 border-t">
          <div className="p-4 bg-card rounded-lg border">
            <h4 className="font-semibold mb-2">🎯 Cómo funciona:</h4>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Busca o elige una canción</li>
              <li>Sigue las letras resaltadas</li>
              <li>Graba tu voz para feedback</li>
              <li>Mejora tu puntuación</li>
            </ol>
          </div>

          <div className="p-4 bg-card rounded-lg border">
            <h4 className="font-semibold mb-2">📚 Beneficios:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Mejora pronunciación</li>
              <li>✅ Expande vocabulario</li>
              <li>✅ Desarrolla escucha</li>
              <li>✅ Aprende con diversión</li>
            </ul>
          </div>

          <div className="p-4 bg-card rounded-lg border">
            <h4 className="font-semibold mb-2">💡 Tips:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>🎯 Empieza con canciones fáciles</li>
              <li>🎯 Practica 15 min diarios</li>
              <li>🎯 Graba y compara tu voz</li>
              <li>🎯 Enfócate en palabras difíciles</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
