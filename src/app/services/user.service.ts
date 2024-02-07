import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  private users: User[] = [];
  private usersObs = new BehaviorSubject<User[]>(this.users);

   currentUser: any ={id: null, email: '', login: '', password: '', passwordConfirm: ''}
   currentUserObs = new BehaviorSubject<User[]>(this.currentUser)

  readonly APIUrl="http://localhost:5279/api/DanteWeb/"
  private usersDataSql: User[] = [];
  private usersDataSqlObs = new BehaviorSubject<User[]>(this.usersDataSql);
  

  constructor(private http: HttpClient, private auth: AuthService) { 
    this.usersSql()
  }

  usersSql(){
    this.http.get<User[]>(this.APIUrl + 'GetNotes').subscribe(data=>{
      this.usersDataSql = data;
      console.log('Użytkownicy w bazie SQL',this.usersDataSql)
    })
  }


  addUser(user: User){
    this.users.push(user)
    const formData = new FormData();
    formData.append('userEmail', user.email);
    formData.append('userLogin', user.login);
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    formData.append('userPassword', hashedPassword);

    this.http.post<User[]>(this.APIUrl+ 'AddNotes', formData).subscribe(response=>{
      this.usersSql()
    }, error=>{
      console.log('Błąd podczas dodawania użytkownika',error);
    })

  }

  deleteUSer(id: number){
    this.http.delete(this.APIUrl+ 'DeleteNotes?id='+id )
  }
  emailCheck(email: string): boolean{
    const emailLowerCase = email.toLowerCase();
    return this.users.some((user)=> user.email.toLowerCase() === emailLowerCase)
  }
  loginCheck(login: string): boolean{
    const loginLowerCase = login.toLowerCase();
    return this.users.some((user)=> user.login.toLowerCase() === loginLowerCase)
  }

  login(email: string, password: string) {
    const emailLowerCase = email.toLowerCase();
    const userFound = this.usersDataSql.find(
      (user) => user.email.toLowerCase() === emailLowerCase 
    );
  
    if (userFound) {
      const passwordMatch = bcrypt.compareSync(password, userFound.password);
      if(!passwordMatch){
        return false
      }
      const { login, id } = userFound;
      this.currentUser.email = email;
      this.currentUser.password = password;
      this.currentUser.login = login;
      this.currentUser.id = id;
      this.auth.login();
      return true;
    }
  
    return false;
  }

}
