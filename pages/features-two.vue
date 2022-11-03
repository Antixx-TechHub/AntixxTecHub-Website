<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Features" 
            pageDesc="The ability to elicit, assessing opportunities" 
        />
        <FeaturesOne />
        <WhatsOurClients />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import FeaturesOne from '../components/features-two/FeaturesOne'
import WhatsOurClients from '../components/features-two/WhatsOurClients'
import FreeTrial from '../components/Common/FreeTrial'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        FeaturesOne,
        WhatsOurClients,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>