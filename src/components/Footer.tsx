import { Paintbrush } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="fixed inset-x-0 bottom-2 sm:bottom-3">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-gray-50 bg-opacity-10 p-2 shadow-lg sm:p-3 text-gray-500 ring-1 ring-gray-900/10 hover:ring-[#f1b7f1]">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <Link href="/">
                  <Paintbrush className="h-8 w-8 text-[#f1b7f1]" />
                </Link>

                <p className="ml-2 truncate font-medium text-gray-500">
                  <Link href="/">
                    <span className="md:inline hover:underline decoration-[#f1b7f1]">
                      Genesis Galleria AI
                    </span>
                  </Link>
                </p>
              </div>
              <div className="order-3 mt-0 w-auto flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="https://sahii.notion.site/Genesis-Galleria-66804f0f612d4fac96269aebd8768a55"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100 text-gray-500 ring-1 ring-gray-900/10 hover:ring-[#f1b7f1]"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;