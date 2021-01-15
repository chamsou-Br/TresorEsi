import React , {useState , useRef }from 'react';
import {View,Text , TouchableOpacity , Modal ,StyleSheet ,ScrollView , Linking } from 'react-native';

const AboutScreen = () => {

  

    return(
        <View style={Styles.AboutScreen}>
            <ScrollView style={Styles.ScrollView} onScroll={(event) => {
                console.log(event.nativeEvent.contentOffset.y)
            }}>
                <View style={Styles.TitleView}>
                    <Text style={Styles.TitleText}>
                        QUI ÊTES-VOUS ?
                    </Text>
                </View>

                <View style={Styles.DescriptionView}>     
                   <Text style={[Styles.DescriptionText,{letterSpacing : 1.5,fontWeight: 'bold'}]}>  Salma Share </Text> 
                   <Text style={Styles.DescriptionText}>J'écris pour notre jeunesse Algérienne , pour notre présent et avenir ,pour dire qu'on est là,on existe ,on peut faire des merveilles pour notre paradis sur terre l’Algérie.</Text>
                </View>

                <View style={Styles.TitleView}>
                    <Text style={Styles.TitleText}>
                    première expérience de bénévolat
                    </Text>
                </View>

                <View style={Styles.DescriptionView}>     
                   <Text style={[Styles.DescriptionText,{letterSpacing : 1.5,fontWeight: 'bold'}]}>  Juin 2012 </Text> 
                   <Text style={Styles.DescriptionText}>je me préparais pour passer le concours de 2CPI (Classes Préparatoires Intégrées) pour passer au cycle supérieur mais je n’ai pas les cours de 1CPI.
                        Que dois-je faire alors ?
                        Heureusement qu’à l’ESI on peut trouver n’importe quel support de cours ! J’ai mes supports de cours de 2CPI et ceux de 1CPI de mes camarades. Au travail !
                        Oh bonne nouvelle j’ai eu mon 12 ! Adieu concours

                        Que dois-je faire avec ces supports de cours ?
                        Je les jette ?!
                        Je les donne ?!
                        Ou quoi ?
                        Tiens ! Je les scanne et je les partage avec les étudiants, ils en auront surement besoin.

                        Entre temps j’ai essayé d’apprendre C# et SQL SERVER 2008. Grâce à mon mentor, nous avons pu développer une application desktop qui englobe les cours de 1CPI et 2CPI.

                        Cette application fonctionnait uniquement sur mon PC, Nous n’avions pas eu le temps de continuer et paramétrer cette application.
                        J’ai quand même gardé le contenu que j’ai partagé peu après avec mes camarades 1CPI et 2CPI
                </Text>
                </View>
                <View style={Styles.DescriptionView}>  
                   <Text style={[Styles.DescriptionText,{letterSpacing : 1.5,fontWeight: 'bold',marginBottom : 5}]}>  Septembre 2013 </Text> 
                   <Text style={Styles.DescriptionText}>J’ai rejoint avec mon binôme le Club Scientifique de l’ESI(CSE).Nous avons proposé ce projets aux membres du bureau du CSE. C’est à ce moment que nous avons commencé le travail pour que le l’application soit prête fin octobre pour que les étudiants prennent bénéfice le plus tôt possible !
                        Nous étions au rendez-vous de lancement 30 October 2013 .C’était une application Auto Play baptisée Trésor ESI Développée par une équipe projet constitué de :
                        §  Chef de projet ,
                        §  Responsables du contenu (1CPI ,2CPI et 1CS),
                        §  Développeurs ,
                        §  Responsable de communication CSE,
                        §   Equipe de saisie des cours composée de 18 membres.
                    </Text>
                    </View>
                    <View style={Styles.DescriptionView}>  
                    <Text style={[Styles.DescriptionText,{letterSpacing : 1.5,fontWeight: 'bold',marginBottom : 5}]}>  Septembre 2014 </Text> 
                   <Text style={Styles.DescriptionText}>Site Web Trésor ESI Développé en HTML 5,CSS3 et PHP ,équipe projet constitué de  21 personnes  organisée  comme suit  :
                            §  Chef de projet ,
                            §  Responsables de collecte du contenu 1CPI,2CPI , 1CS et 2CS (SIQ et SIT),
                            §  Résponsables de qualités du contenu,
                            §  Développeur ,
                            §  Responsable de communication.  
                            Par la suite, Nous avons rencontré le problème d’hébergement du site à cause du contenu volumineux. Nous avons donc partagé le contenu sur Google Drive avec nos camarades.
                            </Text>
                            </View>
                    <View style={Styles.DescriptionView}>  
                             <Text style={[Styles.DescriptionText,{letterSpacing : 1.5,fontWeight: 'bold',marginBottom : 5}]}>  Septembre 2015 </Text> 
                           <Text style={Styles.DescriptionText}>§  Rendre Trésor ESI accessible pour tout le monde sur Google Drive
                            §  Enrichir le contenu par les documents de 2CS SIT, Master, concours 2CPI, Concours doctorat
                            §  Lancement du Groupe Facebook publique : <Text onPress={() => Linking.openURL('https://www.facebook.com/groups/1565564953665047/?fref=ts')} style={{fontWeight : 'bold',color : 'tomato'}}>Trésor Esi </Text> 
                            §  Obtention d’une adresse email propre à nous : <Text onPress={() => Linking.openURL('mailto:tresordelesi@esi.dz')} style={{fontWeight : 'bold',color : 'tomato'}}>tresordelesi@esi.dz. </Text> 
                            </Text>
                        </View>
                        <View style={Styles.DescriptionView}>  
                   <Text style={[Styles.DescriptionText,{letterSpacing : 1.5,fontWeight: 'bold',marginBottom : 5}]}>  Septembre 2016 </Text> 
                   <Text style={Styles.DescriptionText}>Le partage et l'échange sont les principes de base qui font que Trésor ESI continue pour sa 4ème année avec un contenu plus riche.</Text>
                </View>

                <View style={Styles.TitleView}>
                    <Text style={Styles.TitleText}>
                    Qu’est-ce qu’il m’a apportée Trésor ESI ?
                    </Text>
                </View>

                <View style={Styles.DescriptionView}>     
                   <Text style={[Styles.DescriptionText,{letterSpacing : 1.5,fontWeight: 'bold'}]}>  Expérience de bénévolat </Text> 
                   <Text style={Styles.DescriptionText}>C'est une occasion pour nous tous de faire du bénévolat afin de faciliter la vie à nos camarades de l'ESI en général et aux étudiants de 1CPI en particulier.
                </Text>
                </View>
                
                <View style={Styles.DescriptionView}>  
                   <Text style={[Styles.DescriptionText,{letterSpacing : 1.5,fontWeight: 'bold',marginBottom : 5}]}>  Expérience de projet professionnel </Text> 
                   <Text style={Styles.DescriptionText}>
                   Grâce à notre travail d’équipe, nous avons pu fournir des supports de COURS et de TD
                   Grâce à notre engagement, nous avons pu fournir des exemples de TP, d’Exposés, de Projets et d’Examens
                    </Text>
                    </View>

                    <View style={Styles.DescriptionView}>  
                    <Text style={[Styles.DescriptionText,{letterSpacing : 1.5,fontWeight: 'bold',marginBottom : 5}]}>  Développement d’un réseau professionnel </Text> 
                   <Text style={Styles.DescriptionText}>
                   Je suis très honorée de travailler avec une équipe motivée, composée des étudiants de toutes les promotions 1CPI,2CPI,1CS,2CS,3CS et  de différentes spécialités SIQ, SIT et SIL
                            </Text>
                            </View>
                    <View style={Styles.DescriptionView}>  
                             <Text style={[Styles.DescriptionText,{letterSpacing : 1.5,fontWeight: 'bold',marginBottom : 5}]}>  Communication et Echange de savoir faire </Text> 
                           <Text style={Styles.DescriptionText}>
                           je remercie les équipes Trésor ESI 2016, 2015,2014 et 2013 d'avoir consacré du temps et d’efforts pour satisfaire tous les besoins d’un étudiant ESIst  dans le cycle préparatoire et le cycle supérieur.
                            </Text>
                        </View>

                        <View style={Styles.DescriptionView}>  
                   <Text style={[Styles.DescriptionText,{letterSpacing : 1.5,fontWeight: 'bold',marginBottom : 5}]}>  Dernier message </Text> 
                   <Text style={Styles.DescriptionText}>
                   Je souhaite que ce projet évolue d’une promotion à une autre et qu’il y ait toujours une équipe motivée qui prendra en charge la mise à jour de contenu.
  
                    Rejoignez-nous sur Facebook : <Text onPress={() => Linking.openURL('https://www.facebook.com/groups/1565564953665047/?fref=ts')} style={{fontWeight : 'bold',color : 'tomato'}}>TrésorEsi </Text>
                    Merci de partager avec nous votre contenu sur : <Text onPress={() => Linking.openURL('mailto:tresordelesi@esi.dz')} style={{fontWeight : 'bold',color : 'tomato'}}>tresordelesi@esi.dz. </Text> 
                    Votre feedback est le bienvenu, partagez-le avec nous sur :<Text onPress={() => Linking.openURL('mailto:tresordelesi@esi.dz')} style={{fontWeight : 'bold',color : 'tomato'}}>tresordelesi@esi.dz. </Text>    
                    <Text style={{fontWeight : 'bold' }}>                    « Le savoir est la seule richesse qu'on ne perd pas quand on la partage avec autrui »
                    Adage Africain</Text> 
                   </Text>
                </View>

            </ScrollView>
        </View>
    )
}

const Styles = StyleSheet.create({
    AboutScreen : {
        flex : 1,
        textAlign : 'center' ,
        justifyContent : 'center'
    },
    ScrollView : {
       marginTop : 20  ,
       backgroundColor : '#FFF'
    },
    TitleView : {
        backgroundColor : '#001C34',
        width : 300,
        paddingVertical:5,
        marginHorizontal:10,
        borderRadius :  10,
        marginVertical : 10    },
    TitleText : {
        fontSize : 22,
        color : "#FFF",
        fontWeight : 'bold',
        textAlign : 'center'
    },
    DescriptionView : {
        backgroundColor : '#FFF',
        marginHorizontal : 15,
        marginTop : 20,
        shadowColor : '#FFF',
        elevation : 10,
        shadowOpacity : 1,
        marginBottom : 10,
        paddingVertical : 15,
        paddingHorizontal : 10
    },
    DescriptionText : {
        fontSize : 18,
        fontWeight : 'normal',
        color : '#001C34',
        
    }
})

export default AboutScreen