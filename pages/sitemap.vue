<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="SiteMap" pageDesc="Our Services" />
        <Servicedetails />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/privacy-policy/PageTitle';
import Servicedetails from '../components/privacy-policy/Servicedetails'
import BestSupport from '../components/privacy-policy/BestSupport'
import FreeTrial from '../components/privacy-policy/FreeTrial'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Servicedetails,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>