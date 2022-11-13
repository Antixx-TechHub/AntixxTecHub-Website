<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Terms of Use" pageDesc="" />
        <Servicedetails />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/terms-of-use/PageTitle';
import Servicedetails from '../components/terms-of-use/Servicedetails'
import BestSupport from '../components/terms-of-use/BestSupport'
import FreeTrial from '../components/terms-of-use/FreeTrial'
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