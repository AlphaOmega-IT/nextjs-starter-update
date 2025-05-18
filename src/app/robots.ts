import {baseURL} from "@/once-ui/resources/config";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
            },
        ],
        sitemap: `${baseURL}/sitemap.xml`,
    };
}