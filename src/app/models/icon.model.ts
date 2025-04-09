export interface SocialIcon {
  type: 'fontawesome' | 'svg' | 'image';  // Type of icon
  className: string;  // FontAwesome className or image path
  link: string;  // Link URL
  svgPath?: string;  // SVG path if type is 'svg'
  altText?: string;  // Alt text for images
  color?: string;  // Optional: color for hue-rotate filter
}
