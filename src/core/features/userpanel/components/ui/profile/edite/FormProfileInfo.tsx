"use client";
import { updateUser } from "@/core/api-route/userpanel/handlers/profile/updateuser/updateUser";
import { TypographyMuted } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";
import {
  Calendar,
  Github,
  Globe,
  Instagram,
  Linkedin,
  MapPin,
  Save,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
interface UserData {
  name?: string;
  phone?: string;
  bio?: string;
  dateOfBirth?: string;
  country?: string;
  city?: string;
  address?: string;
  gender?: "MALE" | "FEMALE" | "OTHER" | null;
  website?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
}
function FormProfileInfo({ userId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<UserData>({
    name: "",
    phone: "",
    bio: "",
    dateOfBirth: "",
    country: "",
    city: "",
    address: "",
    gender: "FEMALE",
    website: "",
    instagram: "",
    linkedin: "",
    github: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (!formData.name.trim()) {
      toast.error("Name cannot be empty");
    }

    if (!formData.phone.trim()) {
      toast.error("Phone number cannot be empty");
    }

    if (!formData.dateOfBirth.trim()) {
      toast.error("Date of birth cannot be empty");
    }

    if (!formData.country.trim()) {
      toast.error("Country cannot be empty");
    }

    if (!formData.city.trim()) {
      toast.error("City cannot be empty");
    }

    if (!formData.address.trim()) {
      toast.error("Address cannot be empty");
    }

    if (formData.website) {
      toast.error("Invalid website URL format");
    }

    if (formData.instagram) {
      toast.error("Invalid Instagram URL format");
    }

    if (formData.linkedin) {
      toast.error("Invalid LinkedIn URL format");
    }

    if (formData.github) {
      toast.error("Invalid GitHub URL format");
    }
    try {
      const updateinfouser = await updateUser(userId, formData);
      if (updateinfouser) {
        toast.message("update user data");
      } else {
        toast.error("error");
      }
    } catch {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6"
    >
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Information</h2>

        <div>
          <label className=" text-sm font-medium gap-1 text-gray-700 mb-1 flex items-center">
            <User />
            Full Name
          </label>
          <div className="relative">
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className=" pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
            <Calendar />
            Date of Birth
          </label>
          <div className="relative">
            <Input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div>
          <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
            Bio
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us about yourself..."
            maxLength={500}
          />
          <TypographyMuted className="text-xs text-gray-500 mt-1">
            {formData.bio?.length || 0}/500 characters
          </TypographyMuted>
        </div>
      </div>

      <div className="space-y-4 pt-6 border-t">
        <h2 className="text-xl font-semibold">Location</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              <MapPin />
              Country
            </label>
            <div className="relative">
              <Input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Country"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              <MapPin />
              City
            </label>
            <div className="relative">
              <Input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="City"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Full address"
          />
        </div>
      </div>

      <div className="space-y-4 pt-6 border-t">
        <h2 className="text-xl font-semibold">Social Links</h2>

        <div className="space-y-4">
          <div>
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              <Globe />
              Website
            </label>
            <div className="relative">
              <Input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="https://example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                <Instagram />
                Instagram
              </label>
              <div className="relative">
                <Input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="@username"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                <Linkedin />
                LinkedIn
              </label>
              <div className="relative">
                <Input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="username"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              <Github />
              GitHub
            </label>
            <div className="relative">
              <Input
                type="text"
                name="github"
                value={formData.github}
                onChange={handleChange}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="username"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t flex justify-end gap-4">
        <Button type="button" onClick={() => router.back()} variant="secondary">
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading} variant="outline">
          <Save className="h-4 w-4" />
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  );
}

export default FormProfileInfo;
