<script>
    import '../app.scss';
</script>

<section class="about">
    <img src="./images/me.jpg" alt="Photographie de Costin Cadeau" class="about__img">
    <div class="about__desc">
        <p class="about__text">
            Hello, World ! Je suis Costin Cadeau développeur web et j’aime coder de chaque côtes de la requête !
        </p>
        <p class="about__text">
            Pourquoi un artisan du web ? J’aime faire un parallèle avec l’artisanat, ce sont des métiers passionnants, créatifs et uniques. Le développement web permet cela, qu’on soit développeur Front-End ou développeur Back-End, un projet est toujours unique !
        </p>
        <p class="about__text">
            Pour ma petite histoire, je suis un passionné d’informatique depuis mon enfance. J’ai étudié et travail dans le domaine, d'administrateur réseau et télécoms au sein de l’Armée de l’Air et l’Espace, j'ai choisi de me reconvertir dans le développement web. Pour cette nouvelle aventure, j'ai choisi l'école O’Clock pour me former.
        </p>
    </div>
</section>

<style lang="scss">
    .about {
        margin-top: 8rem;
        padding-inline: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        &__img {
            width: 12rem;
            border-radius: .5rem;
        }
        &__desc {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        &__text {
            line-height: 1.85rem;
        }
    }
</style>