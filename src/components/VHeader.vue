<script setup> </script>
<template>
    <header>
        <nav class="desktop-nav">
            <div class="container">
                <div class="desktop-nav__wrap">
                    <img src="@/assets/img/logo.svg" alt="Nextcent" class="desktop-nav__logo">
                    <ul class="nav__list">
                        <li class="nav__list-el_active"><a href="#">Home</a></li>
                        <li><a href="">Service</a></li>
                        <li><a href="">Feature</a></li>
                        <li><a href="">Product</a></li>
                        <li><a href="">Testimonial</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                    <div class="nav__buttons">
                        <button class="button_light-sm">Login</button>
                        <button class="button_primary-sm">Sign up</button>
                    </div>
                </div>
            </div>
        </nav>
        <nav class="mobile-nav opened">
            <div class="mobile-nav__wrap">

                <div class="container">
                    <div class="mobile-nav__header">
                        <img src="@/assets/img/logo-sm.svg" alt="">
                        <button class="mobile-nav__header-button">
                            <img src="@/assets/img/menu-open.svg" alt="" class="icon_menu-open">
                            <img src="@/assets/img/menu-close.svg" alt="" class="icon_menu-close">
                        </button>
                    </div>
                    <div class="mobile-nav__content">
                        <ul class="nav__list">
                            <li class="nav__list-el_active"><a href="#">Home</a></li>
                            <li><a href="">Service</a></li>
                            <li><a href="">Feature</a></li>
                            <li><a href="">Product</a></li>
                            <li><a href="">Testimonial</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="nav__buttons">
                        <button class="button_light-sm">Login</button>
                        <button class="button_primary-sm">Sign up</button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>

</style>