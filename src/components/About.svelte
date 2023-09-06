<script>
    import '../app.scss';
    import imgMe from '$lib/images/me.jpg';
    import resumeLight from '$lib/documents/costin-cadeau_cv_l.pdf';
    import resumeDark from '$lib/documents/costin-cadeau_cv_d.pdf';
</script>

<section class="about">
    <img src="{imgMe}" alt="Photographie de Costin Cadeau" class="about__img">
    <div class="about__desc">
        <p class="about__text">
            Hello, World ! Je suis Costin Cadeau développeur web et j’aime coder de chaque côté de la requête !
        </p>
        <p class="about__text">
            Pourquoi un artisan du web ? J’aime faire un parallèle avec l’artisanat, ce sont des métiers passionnants, créatifs et uniques. Le développement web permet cela. Qu’on soit développeur Front-End ou développeur Back-End, chaque projet est unique !
        </p>
        <p class="about__text">
            Pour ma petite histoire, je suis un passionné d’informatique depuis mon enfance. J’ai étudié et travaillé dans le domaine de l'informatique comme administrateur réseau et télécom au sein de l’Armée de l’Air et l’Espace. Suite à ce parcours, je me suis reconvertis dans le développement web. Pour cette nouvelle aventure, j'ai choisi l'école O’Clock pour me former.
        </p>
        <p class="about__resume">mon cv : <a href="{resumeLight}" target="_blank" rel="noopener noreferrer" class="about__link">version clair</a> | <a href="{resumeDark}" target="_blank" rel="noopener noreferrer" class="about__link">version sombre</a></p>
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
        &__resume {
            margin-top: 0.5rem;
            font-family: $montserrat-italic;
            align-self: flex-end;
        }
        &__link {
            font-family: $montserrat-semibold-italic;
            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>