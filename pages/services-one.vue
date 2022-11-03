<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Services" pageDesc="Our Services" />
        <Services />
        <WhyChooseUs />
        <PricingPlan />
        <ReadyToHelpYou />
        <DownloadApp />
        <WhatsOurClients />
        <BestSupport />
        <OurLovingClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import Services from '../components/services-one/Services'
import WhyChooseUs from '../components/Common/WhyChooseUs'
import PricingPlan from '../components/Common/PricingPlan'
import ReadyToHelpYou from '../components/Common/ReadyToHelpYou'
import DownloadApp from '../components/Common/DownloadApp'
import WhatsOurClients from '../components/Common/WhatsOurClients'
import BestSupport from '../components/Common/BestSupport'
import OurLovingClients from '../components/Common/OurLovingClients'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Services,
        WhyChooseUs,
        PricingPlan,
        ReadyToHelpYou,
        DownloadApp,
        WhatsOurClients,
        BestSupport,
        OurLovingClients,
        FooterStyleOne,
    }
};
</script>
