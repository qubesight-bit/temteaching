import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Clock, LogOut, BookOpen } from 'lucide-react';

export default function PendingApproval() {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-info flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-display font-bold text-2xl text-foreground">EnglishFlow</h1>
        </div>

        <Card className="text-center">
          <CardHeader>
            <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            </div>
            <CardTitle className="text-xl">Account Pending Approval</CardTitle>
            <CardDescription className="text-base">
              Your account has been created successfully!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              An administrator needs to approve your account before you can access the platform. 
              You'll be able to log in once approved.
            </p>
            
            <div className="p-4 rounded-lg bg-secondary/50 text-sm">
              <p className="font-medium text-foreground mb-1">Registered email:</p>
              <p className="text-muted-foreground">{user?.email}</p>
            </div>

            <Button 
              variant="outline" 
              className="w-full mt-4"
              onClick={handleSignOut}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Please contact your administrator if you need immediate access.
        </p>
      </div>
    </div>
  );
}
