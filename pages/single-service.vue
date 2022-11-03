<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Service Details" pageDesc="Our Services" />
        <Servicedetails />
        <BestSupport />
        <OurLovingClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import Servicedetails from '../components/single-service/Servicedetails'
import BestSupport from '../components/Common/BestSupport'
import OurLovingClients from '../components/Common/OurLovingClients'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Servicedetails,
        BestSupport,
        OurLovingClients,
        FooterStyleOne,
    }
};
</script>