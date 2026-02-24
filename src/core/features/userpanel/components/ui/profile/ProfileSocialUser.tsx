import { TypographyMuted } from "@/core/components/custom/ui/Typography";
import { Github, Globe, Instagram, Linkedin } from "lucide-react";

function ProfileSocialUser({ user }) {
  const hasSocial =
    user.website || user.instagram || user.linkedin || user.github;

  if (!hasSocial) return null;

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6">
      <h2 className="text-xl font-semibold mb-6 text-foreground">
        Social Links
      </h2>

      <div className="space-y-3">
        {user.website && (
          <a
            href={
              user.website.startsWith("http")
                ? user.website
                : `https://${user.website}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg transition hover:bg-muted"
          >
            <Globe className="h-5 w-5 text-muted-foreground" />
            <div className="min-w-0">
              <TypographyMuted className="font-medium text-foreground">
                Website
              </TypographyMuted>
              <TypographyMuted className="text-sm text-muted-foreground truncate">
                {user.website}
              </TypographyMuted>
            </div>
          </a>
        )}

        {user.instagram && (
          <a
            href={`https://instagram.com/${user.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg transition hover:bg-muted"
          >
            <Instagram className="h-5 w-5 text-muted-foreground" />
            <div>
              <TypographyMuted className="font-medium text-foreground">
                Instagram
              </TypographyMuted>
              <TypographyMuted className="text-sm text-muted-foreground">
                @{user.instagram}
              </TypographyMuted>
            </div>
          </a>
        )}

        {user.linkedin && (
          <a
            href={`https://linkedin.com/in/${user.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg transition hover:bg-muted"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground" />
            <div>
              <TypographyMuted className="font-medium text-foreground">
                LinkedIn
              </TypographyMuted>
              <TypographyMuted className="text-sm text-muted-foreground">
                {user.linkedin}
              </TypographyMuted>
            </div>
          </a>
        )}

        {user.github && (
          <a
            href={`https://github.com/${user.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg transition hover:bg-muted"
          >
            <Github className="h-5 w-5 text-muted-foreground" />
            <div>
              <TypographyMuted className="font-medium text-foreground">
                GitHub
              </TypographyMuted>
              <TypographyMuted className="text-sm text-muted-foreground">
                {user.github}
              </TypographyMuted>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProfileSocialUser;
