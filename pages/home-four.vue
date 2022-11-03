<template>
    <div>
        <NavbarStyleOne />
        <MainBanner />
        <AmazingFeatures />
        <Services />
        <MoreToDiscover />
        <WhyChooseUs />
        <YourApplication />
        <WhatsOurClients />
        <PricingPlan />
        <Faq />
        <OurLovingClients />
        <FreeTrial class="pt-0" />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleOne from '../layouts/NavbarStyleOne'
import MainBanner from '../components/home-four/MainBanner';
import AmazingFeatures from '../components/home-four/AmazingFeatures';
import Services from '../components/home-four/Services';
import MoreToDiscover from '../components/home-four/MoreToDiscover';
import WhyChooseUs from '../components/Common/WhyChooseUs'
import YourApplication from '../components/home-four/YourApplication';
import WhatsOurClients from '../components/Common/WhatsOurClients';
import PricingPlan from '../components/Common/PricingPlan';
import Faq from '../components/Common/Faq'
import OurLovingClients from '../components/Common/OurLovingClients';
import FreeTrial from '../components/Common/FreeTrial'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleOne,
        MainBanner,
        AmazingFeatures,
        Services,
        MoreToDiscover,
        WhyChooseUs,
        YourApplication,
        WhatsOurClients,
        PricingPlan,
        Faq,
        OurLovingClients,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>