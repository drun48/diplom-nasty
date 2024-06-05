export type ListCitizen = {
    id:number,
    first_name:string,
    last_name:string,
    second_name:string,
    organizationName:string,
    email:string,
    inn:string,
    phone:string,
    category:string
}

export type ListCitizenName = Pick<ListCitizen, 'id' | 'first_name' | 'last_name' | 'second_name'>