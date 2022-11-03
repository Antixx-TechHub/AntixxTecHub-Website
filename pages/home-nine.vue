<template>
    <div>
        <TopBar />
        <Navbar />
        <MainBanner />
        <Features />
        <MobileDevelopment />
        <HostingServices />
        <WhyChooseUs />
        <AmazingFeatures />
        <WhatsOurClients />
        <PricingPlan />
        <ReadyToHelpYou />
        <OurLovingClients />
        <Faq />
        <BestSupport />
        <LatestNews />
        <Footer />
    </div>
</template>

<script>
import TopBar from '../layouts/TopBar'
import Navbar from '../layouts/NavbarStyleOne';
import MainBanner from '../components/Index/MainBanner';
import Features from '../components/Common/Features';
import MobileDevelopment from '../components/Index/MobileDevelopment';
import HostingServices from '../components/Index/HostingServices';
import WhyChooseUs from '../components/Common/WhyChooseUs';
import AmazingFeatures from '../components/Index/AmazingFeatures';
import WhatsOurClients from '../components/Common/WhatsOurClients';
import PricingPlan from '../components/Common/PricingPlan';
import ReadyToHelpYou from '../components/Common/ReadyToHelpYou';
import OurLovingClients from '../components/Common/OurLovingClients';
import Faq from '../components/Common/Faq'
import BestSupport from '../components/Index/BestSupport'
import LatestNews from '../components/Common/LatestNews'
import Footer from '../layouts/Footer'

export default {
    components: {
        TopBar,
        Navbar,
        MainBanner,
        Features,
        MobileDevelopment,
        HostingServices,
        WhyChooseUs,
        AmazingFeatures,
        WhatsOurClients,
        PricingPlan,
        ReadyToHelpYou,
        OurLovingClients,
        Faq,
        BestSupport,
        LatestNews,
        Footer,
    }
};
</script>
