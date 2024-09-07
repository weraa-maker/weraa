import { Facebook, Globe, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <div>
            <section className="flex flex-col py-20 bg-[#3a3b3c] text-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        ©2024 WERAA, Inc. All rights reserved.
                    </div>
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <a href="https://x.com/_weraa_1_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
                            <Twitter className="h-6 w-6 inline-block mr-4" />
                        </a>
                        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
                            <Linkedin className="h-6 w-6 inline-block mr-4" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
                            <Instagram className="h-6 w-6 inline-block mr-4" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
                            <Facebook className="h-6 w-6 inline-block mr-4" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
                            <Youtube className="h-6 w-6 inline-block" />
                        </a>
                    </div>
                    <div className="text-center md:text-right">
                        <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
