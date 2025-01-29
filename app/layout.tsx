import "/public/assets/css/vendors/bootstrap.min.css"
import "/public/assets/css/vendors/swiper-bundle.min.css"
import "/public/assets/css/vendors/aos.css"
import "/public/assets/css/vendors/odometer.css"
import "/public/assets/css/vendors/carouselTicker.css"
import "/public/assets/css/vendors/magnific-popup.css"
import "/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css"
import "/public/assets/fonts/boxicons/boxicons.min.css"
import "/public/assets/fonts/satoshi/satoshi.css"
import "/public/assets/css/main.css"

import "@/node_modules/react-modal-video/css/modal-video.css"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Xchange OOH",
    description: "Xchange is a global outdoor advertising platform specializing in Out-of-Home (OOH) and Digital Out-of-Home (DOOH) advertising. It empowers brands and agencies to execute precise, data-driven campaigns worldwide, maximizing visibility and impact. With a focus on innovation, creativity, and cultural sensitivity, Xchange connects brands to target audiences through strategic placements, including airports, shopping centers, public spaces, and transit locations. Guided by expertise and cutting-edge technology, Xchange offers customized solutions, dynamic campaign management, and real-time analytics. Its robust global network ensures unparalleled access to key markets, particularly in Latin America and among Hispanic audiences worldwide, making it a trusted partner for advertisers seeking excellence in programmatic DOOH strategies. Xchange transforms the advertising landscape, blending storytelling with technology to engage audiences locally and globally.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    )
}
