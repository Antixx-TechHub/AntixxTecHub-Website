<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Cookies" pageDesc="" />
        <Servicedetails />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/cookies/PageTitle';
import Servicedetails from '../components/cookies/Servicedetails'
import BestSupport from '../components/cookies/BestSupport'
import FreeTrial from '../components/cookies/FreeTrial'
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