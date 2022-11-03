<template>
    <div class="features-card-section pt-100 pb-70 bg-f8fbfa">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="single-features-card">
                        <i class='bx bx-conversation'></i>
                        <h3>
                            <NuxtLink to="/single-service">IT Consultancy</NuxtLink>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="single-features-card">
                        <i class='bx bx-laptop'></i>
                        <h3>
                            <NuxtLink to="/single-service">Web Development</NuxtLink>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="single-features-card">
                        <i class='bx bxs-badge-check'></i>
                        <h3>
                            <NuxtLink to="/single-service">IT Solutions</NuxtLink>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="single-features-card">
                        <i class='bx bxs-megaphone'></i>
                        <h3>
                            <NuxtLink to="/single-service">Digital Marketing</NuxtLink>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Features'
}
</script>