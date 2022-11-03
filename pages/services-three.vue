<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Services Style Three" pageDesc="Our Services" />
        <ServicesTwo />
        <WhatsOurClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import ServicesTwo from '../components/services-three/ServicesTwo'
import WhatsOurClients from '../components/services-two/WhatsOurClients'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        ServicesTwo,
        WhatsOurClients,
        FooterStyleOne,
    }
};
</script>