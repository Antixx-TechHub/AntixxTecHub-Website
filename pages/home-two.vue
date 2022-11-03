<template>
    <div>
        <Navbar />
        <MainBanner />
        <Features />
        <UIDesign />
        <DigitalMarketing />
        <AmazingFeatures />
        <WhatsOurClients />
        <WhyChooseUs />
        <PricingPlan />
        <ReadyToHelpYou />
        <Faq class="bg-color-f4f5fe" />
        <LatestNews />
        <BestSupport />
        <OurLovingClients />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
import MainBanner from '../components/home-two/MainBanner';
import Features from '../components/Common/Features';
import UIDesign from '../components/home-two/UIDesign';
import DigitalMarketing from '../components/home-two/DigitalMarketing';
import AmazingFeatures from '../components/home-two/AmazingFeatures';
import WhatsOurClients from '../components/home-two/WhatsOurClients';
import WhyChooseUs from '../components/Common/WhyChooseUs';
import PricingPlan from '../components/Common/PricingPlan';
import ReadyToHelpYou from '../components/home-two/ReadyToHelpYou';
import Faq from '../components/Common/Faq'
import LatestNews from '../components/home-two/LatestNews'
import BestSupport from '../components/Common/BestSupport'
import OurLovingClients from '../components/Common/OurLovingClients';
import Footer from '../layouts/Footer'

export default {
    components: {
        Navbar,
        MainBanner,
        Features,
        UIDesign,
        DigitalMarketing,
        AmazingFeatures,
        WhatsOurClients,
        WhyChooseUs,
        PricingPlan,
        ReadyToHelpYou,
        Faq,
        LatestNews,
        BestSupport,
        OurLovingClients,
        Footer,
    }
};
</script>
