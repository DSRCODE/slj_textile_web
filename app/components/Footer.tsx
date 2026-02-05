import Link from "next/link";
import { Facebook, Twitter, Youtube, Phone, Clock, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#3f3f3f] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Image src={"/logo.png"} alt="SLJ Textile" width={60} height={80} />
            <h3 className="text-2xl font-semibold text-white">SLJ TEXTILES </h3>
          </div>
          <p className="text-sm leading-7 text-gray-300 max-w-sm">
            174/132, Sector 17, Pratap Nagar, Jaipur, Rajasthan 302033
          </p>
          <div className="flex gap-4 mt-6">
            <SocialIcon>
              <Facebook size={18} />
            </SocialIcon>
            <SocialIcon>
              <Twitter size={18} />
            </SocialIcon>
            <SocialIcon>
              <Youtube size={18} />
            </SocialIcon>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-medium text-[#cbb58b] mb-6">
            Our Services
          </h4>
          <ul className="space-y-4 text-sm">
            <li>Fabric Dyeing</li>
            <li>Satin Weaving</li>
            <li>Fabric Printing</li>
            <li>Garment Stitching</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-xl font-medium text-[#cbb58b] mb-6">Pages</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Categories</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-medium text-[#cbb58b] mb-6">Contact</h4>
          <ul className="space-y-5 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#cbb58b]" />
              +91 78919 63392
            </li>
            <li className="flex items-center gap-3">
              <Clock size={16} className="text-[#cbb58b]" /> Mon - Fri : 9 am -
              11 pm
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#cbb58b]" />{" "}
              shreelj2025@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">
          <p>Copyright © {new Date().getFullYear()} SLJ Textiles</p>

          <div className="flex gap-6">
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <span>|</span>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#cbb58b] text-black hover:scale-105 transition cursor-pointer">
      {children}
    </div>
  );
}
