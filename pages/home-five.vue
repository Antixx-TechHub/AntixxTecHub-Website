<template>
    <div>
        <Navbar />
        <MainBanner />
        <Partner />
        <ConnectionsYourcCustomers />
        <TheBestInnovative />
        <WhyChooseUs />
        <TheAbilityToElicit />
        <WhatsOurClients />
        <PricingPlan />
        <Faq />
        <OurLovingClients />
        <FreeTrial class="pt-0" />
        <FooterStyleOne />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
import MainBanner from '../components/home-five/MainBanner';
import Partner from '../components/Common/Partner';
import ConnectionsYourcCustomers from '../components/Common/ConnectionsYourcCustomers';
import TheBestInnovative from '../components/Common/TheBestInnovative';
import WhyChooseUs from '../components/Common/WhyChooseUs';
import TheAbilityToElicit from '../components/home-five/TheAbilityToElicit';
import WhatsOurClients from '../components/Common/WhatsOurClients';
import PricingPlan from '../components/Common/PricingPlan';
import Faq from '../components/Common/Faq'
import OurLovingClients from '../components/Common/OurLovingClients';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        Navbar,
        MainBanner,
        Partner,
        ConnectionsYourcCustomers,
        TheBestInnovative,
        WhyChooseUs,
        TheAbilityToElicit,
        WhatsOurClients,
        PricingPlan,
        Faq,
        OurLovingClients,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>
