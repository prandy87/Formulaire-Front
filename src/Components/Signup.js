import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = ({ setUser, setUserData }) => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axios.post("http://localhost:3001/signup", data);
      console.log(response.data);
      setUser(response.data.token);
      setUserData(response.data.account);
    } catch (error) {
      console.log(error.message);
      if (error.message.includes("400")) {
        alert(`Votre email est déjà enregistré`);
      }
    }
  };

  return (
    <div>
      <h2>Inscrivez-vous !</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <select {...register("gender", { required: true })}>
          <option value="female">Madame</option>
          <option value="male">Monsieur</option>
        </select>
        <input
          {...register("firstName", { required: true })}
          placeholder="Prénom*"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Nom*"
        />

        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Votre email*"
          onPaste={(e) => {
            e.preventDefault();
            return false;
          }}
          onCopy={(e) => {
            e.preventDefault();
            return false;
          }}
        />

        <input
          type="email"
          {...register("email2", {
            required: true,
            validate: (value) => value === watch("email"),
          })}
          placeholder="Confirmez votre email*"
          onPaste={(e) => {
            e.preventDefault();
            return false;
          }}
          onCopy={(e) => {
            e.preventDefault();
            return false;
          }}
        />

        <input
          type="password"
          {...register("password", {
            required: true,
          })}
          placeholder="Entrez un mot de passe de 8 caractères contenant au moins un chiffre et une minuscule*"
        />
        <input
          type="password"
          {...register("password2", {
            required: true,
            validate: (value) => value === watch("password"),
          })}
          placeholder="Confirmez votre mot de passe*"
        />

        <input
          {...register("birthday")}
          placeholder="Date de naissance format jj/mm/aaaa"
        />
        <input
          {...register("address")}
          placeholder="Adresse ex. 145 rue Manin"
        />
        <input {...register("zipcode")} placeholder="Code postal ex. 75019" />
        <input {...register("city")} placeholder="Ville" />
        <textarea
          {...register("comment")}
          maxLength="255"
          placeholder="Votre commentaire"
        />
        <p>Les champs marqués d'une * sont obligatoires.</p>
        <p>
          J'ai lu et j'accèpte les conditions.
          <input type="checkbox" />
        </p>

        <input type="submit" />
      </form>
      <Link to={"/signin"}>
        <p className="reminder">Déjà membre? Connectez-vous !</p>
      </Link>
    </div>
  );
};

export default Signup;
