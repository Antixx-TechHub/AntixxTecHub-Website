<template>
    <div>
        <Navbar />
        <MainBanner />
        <Features />
        <ITConsultancy />
        <HostingServices />
        <ReadyToHelpYou />
        <AmazingFeatures />
        <WhatsOurClients />
        <PricingPlan />
        <OurLovingClients class="bg-white bg-color-f8fbfa" />
        <DownloadApp />
        <LatestNews />
        <BestSupport />
        <FreeTrial />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
import MainBanner from '../components/home-three/MainBanner';
import Features from '../components/Common/Features';
import ITConsultancy from '../components/home-three/ITConsultancy';
import HostingServices from '../components/home-three/HostingServices';
import ReadyToHelpYou from '../components/Common/ReadyToHelpYou';
import AmazingFeatures from '../components/home-three/AmazingFeatures';
import WhatsOurClients from '../components/home-three/WhatsOurClients';
import PricingPlan from '../components/Common/PricingPlan';
import OurLovingClients from '../components/Common/OurLovingClients';
import DownloadApp from '../components/Common/DownloadApp';
import LatestNews from '../components/Common/LatestNews'
import BestSupport from '../components/home-three/BestSupport'
import FreeTrial from '../components/Common/FreeTrial'
import Footer from '../layouts/Footer'

export default {
    components: {
        Navbar,
        MainBanner,
        Features,
        ITConsultancy,
        HostingServices,
        ReadyToHelpYou,
        AmazingFeatures,
        WhatsOurClients,
        PricingPlan,
        OurLovingClients,
        DownloadApp,
        LatestNews,
        BestSupport,
        FreeTrial,
        Footer,
    }
};
</script>
