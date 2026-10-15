import { trackEvent } from "../../lib/analytics";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import { config } from "../../constant/config";

const socialLinks = [
  { label: "LinkedIn", href: config.linkedinUrl, Icon: LinkedInIcon },
  { label: "GitHub", href: config.githubUrl, Icon: GitHubIcon },
  { label: "Instagram", href: config.instagramUrl, Icon: InstagramIcon },
  { label: "Facebook", href: config.facebookUrl, Icon: FacebookIcon },
  { label: "X", href: config.twitterUrl, Icon: XIcon },
  { label: "WhatsApp", href: config.whatsappUrl, Icon: WhatsAppIcon },
];

const SocialMedia = () => (
  <div className="socials">
    {socialLinks.map(({ label, href, Icon }) => (
      <a key={label} className="socials-icon" href={href} aria-label={label}
        onClick={() => trackEvent("social_click", { platform: label, source: "footer" })}>
        <Icon />
      </a>
    ))}
  </div>
);

export default SocialMedia;
