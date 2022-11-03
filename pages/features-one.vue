<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Features" 
            pageDesc="The ability to elicit, assessing opportunities" 
        />
        <Features />
        <WhatsOurClients />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import Features from '../components/features-one/Features'
import WhatsOurClients from '../components/Common/WhatsOurClients'
import BestSupport from '../components/Common/BestSupport'
import FreeTrial from '../components/Common/FreeTrial'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Features,
        WhatsOurClients,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>