import { createContext, ReactNode, useState, useEffect  } from "react";
import { auth, firebase } from '../sevices/firebase'


type User = {
    id: string;
    name: string;
    avatar: string;
  }
  
  type AuthContextType = {
    user: User | undefined;
    singnInWithGoogle: () => Promise<void>;
  }

  type AuthContexProviderProps = {
    children: ReactNode;
  }

export const AuthContext = createContext({} as AuthContextType);


  

export function AuthContexProvider(props: AuthContexProviderProps) {

    const [user, setUser] = useState<User>();

    // Inicio de recuperar estado da aplicação
    useEffect(() => {
      const unsubriscribe = auth.onAuthStateChanged(user => {
        if(user) {
          const {displayName, photoURL, uid } = user
  
          if(!displayName || !photoURL) {
            throw new Error("Missing information from Google Account.")
          }
  
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
        }
      })
  
      return () => {
        unsubriscribe();
      }
    }, [])
  
  // fim de recuperar estado da aplicação
  
  //inicio de autentificação
    async function singnInWithGoogle(){
      const provider = new firebase.auth.GoogleAuthProvider();
  
      const result = await auth.signInWithPopup(provider)   
          
        if(result.user) {
          const {displayName, photoURL, uid } = result.user
  
          if(!displayName || !photoURL) {
            throw new Error("Missing information from Google Account.")
          }
  
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
        }
     }
     //fim de autentificação

    return(
        <AuthContext.Provider value={{ user, singnInWithGoogle }} >
            {props.children}
        </AuthContext.Provider>

    );
}