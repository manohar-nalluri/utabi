import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SpotifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>Spotify</title>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.323 17.042c-.21.323-.603.442-.927.232-2.622-1.612-5.913-1.972-10.013-1.082-.39.087-.78-.13-.868-.522-.087-.39.13-.78.522-.868C11.79 8.91 15.44 9.3 18.387 11.13c.324.21.443.602.232.926v-.014zm1.08-2.425c-.258.39-.736.52-1.126.262-3.017-1.857-7.552-2.308-11.165-1.264-.456.13-.913-.152-1.042-.608-.13-.456.152-.913.608-1.042C7.9 5.09 12.912 5.6 16.417 7.74c.39.258.52.736.262 1.126V14.617zm.124-2.54c-3.512-2.143-9.32-2.36-12.993-1.303-.522.148-1.06-.16-1.207-.68-.148-.522.16-1.06.68-1.207C7.91 3.607 14.308 3.87 18.45 6.36c.456.278.604.856.326 1.313-.278.456-.856.604-1.313.326z" />
  </svg>
);

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) {
    const params = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : "",
    );
    const from = params.get("from") || "/dashboard";
    redirect(from);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-primary/10 p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-primary/10">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="hsl(var(--primary))"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" />
            </svg>
          </div>
          <CardTitle className="text-3xl font-bold">
            <h2>Welcome to Utabi</h2>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            <h5>Sign in with your Spotify account to continue.</h5>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            asChild
            className="w-full bg-[#1DB954] hover:bg-[#1ED760] text-white text-lg py-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link href="/api/auth/signin?provider=spotify" prefetch={false}>
              <SpotifyIcon className="mr-3 h-6 w-6" />
              Sign in with Spotify
            </Link>
          </Button>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            <p>
              By signing in, you agree to Utabi&apos;s Terms of Service and
              Privacy Policy. Harmonia uses the Spotify API but is not
              affiliated with Spotify.
            </p>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
