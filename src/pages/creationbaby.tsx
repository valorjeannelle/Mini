import {useState} from 'react'


function CreationBaby(){
    const [name,setName]=useState("");
    const [firstname,setfirstName]=useState("");
    const [sex,setSex]=useState("");
    const [birthdate,setBirthDate]=useState("");
    const [birthplace,setBirthPlace]=useState("");
    const [weight,setWeight]=useState("");
    const [height,setHeight]=useState("");
    const [vitalstate,setVitalState]=useState("");
    const [photo,setPhoto]=useState<File | null>(null);

   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    
}
    return (
        <>
        <h1>Enregistrement du nouveau né</h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Information du nouveau né</legend>
                <label htmlFor="nom">Nom:</label>
                <input placeholder="Entrez le nom du nouveau-né" type="text" id="nom" value={name} onChange={(event)=>
                    setName(event.target.value)
                }/>
                <label htmlFor="prenom">Prénom:</label>
                <input placeholder="Entrez le prénom du nouveau-né" type="text" id="prenom" value={firstname}
                onChange={(event)=>setfirstName(event.target.value)}
                />

                <label htmlFor="sexe">Sexe:</label>
                <select id="sexe" value={sex}
                onChange={(event)=>setSex(event.target.value)}
                >
                    <option value="">Selectionner le sexe du nouveau-né</option>
                    <option value="Masculin">Masculin</option>
                    <option value="Feminin">Féminin</option>
                </select>

                <label htmlFor="date-naissance">Date de naissance:</label>
                <input type="date" id="date-naissance" value={birthdate}
                    onChange={(event)=>setBirthDate(event.target.value)}
                />

                <label htmlFor="lieu-naissance">Lieu de naissance:</label>
                <input placeholder="Entrez lelieu de naissance" type="text" id="lieu-naissance"
                    value={birthplace} onChange={(event)=>setBirthPlace(event.target.value)}
                 />
                
                <label htmlFor="poids">Poids(en kg):</label>
                <input placeholder="Entrez le poids" type="number" id="poids" 
                    value={weight} onChange={(event)=>setWeight(event.target.value)}
                />
                
                <label htmlFor="taille">Taille(en cm):</label>
                <input placeholder="Entrez la taille" type="number" id="taille"
                    value={height} onChange={(event)=>setHeight(event.target.value)}
                />

                <label htmlFor="statut-vital">Statut vital:</label>
                <select id="statut-vital" value={vitalstate} onChange={(event)=>{
                    setVitalState(event.target.value)
                }}>
                    <option value="">Selectionnez le statut vital du nouveau-né</option>
                    <option value="vivant">Vivant</option>
                    <option value="mort_ne">Mort-né</option>
                    <option value="decede">Décédé</option>
                </select>

                <label htmlFor="photo">Photo du nouveau-né:</label>
                <input type="file" id="photo" accept="image/*" onChange={(event)=>{
                    if(event.target.files){
                        setPhoto(event.target.files[0]);
                    }
                }}/>
            </fieldset>
            <button type='submit'>Valider</button>
        </form>
        </>
    );
}

export default CreationBaby;