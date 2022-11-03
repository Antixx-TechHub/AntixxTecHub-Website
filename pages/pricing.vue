<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Transparent Pricing" 
            pageDesc="Border-less account pricing" 
        />
        <PricingPlan />
        <Faq />
        <OurLovingClients />
        <FreeTrial class="pt-0" />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import PricingPlan from '../components/Common/PricingPlan'
import Faq from '../components/Common/Faq'
import OurLovingClients from '../components/Common/OurLovingClients'
import FreeTrial from '../components/Common/FreeTrial'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        PricingPlan,
        Faq,
        OurLovingClients,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>
