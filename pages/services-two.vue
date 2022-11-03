<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Services Style Two" pageDesc="Our Services" />
        <ServicesOne />
        <WhatsOurClients />
        <WhyChooseUs />
        <PricingPlan />
        <ReadyToHelpYou />
        <BestSupport />
        <OurLovingClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import ServicesOne from '../components/services-two/ServicesOne'
import PageTitle from '../components/Common/PageTitle';
import WhatsOurClients from '../components/services-two/WhatsOurClients'
import WhyChooseUs from '../components/Common/WhyChooseUs'
import PricingPlan from '../components/Common/PricingPlan'
import ReadyToHelpYou from '../components/services-two/ReadyToHelpYou'
import BestSupport from '../components/Common/BestSupport'
import OurLovingClients from '../components/Common/OurLovingClients'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        ServicesOne,
        WhatsOurClients,
        WhyChooseUs,
        PricingPlan,
        ReadyToHelpYou,
        BestSupport,
        OurLovingClients,
        FooterStyleOne,
    }
};
</script>
