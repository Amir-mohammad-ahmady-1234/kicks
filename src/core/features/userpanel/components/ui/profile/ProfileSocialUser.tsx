import { TypographyMuted } from "@/core/components/custom/ui/Typography";
import { Github, Globe, Instagram, Linkedin } from "lucide-react";

function ProfileSocialUser({ user }) {
  return (
    <>
      {(user.website || user.instagram || user.linkedin || user.github) && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-6">Social Links</h2>

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
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition"
              >
                <Globe className="h-5 w-5 text-blue-500" />
                <div>
                  <TypographyMuted className="font-medium">
                    Website
                  </TypographyMuted>
                  <TypographyMuted className="text-sm text-gray-500 truncate">
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
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition"
              >
                <Instagram className="h-5 w-5 text-pink-500" />
                <div>
                  <TypographyMuted className="font-medium">
                    Instagram
                  </TypographyMuted>
                  <TypographyMuted className="text-sm text-gray-500">
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
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition"
              >
                <Linkedin className="h-5 w-5 text-blue-700" />
                <div>
                  <TypographyMuted className="font-medium">
                    LinkedIn
                  </TypographyMuted>
                  <TypographyMuted className="text-sm text-gray-500">
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
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition"
              >
                <Github className="h-5 w-5 text-gray-900" />
                <div>
                  <TypographyMuted className="font-medium">
                    GitHub
                  </TypographyMuted>
                  <TypographyMuted className="text-sm text-gray-500">
                    {user.github}
                  </TypographyMuted>
                </div>
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileSocialUser;
