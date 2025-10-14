import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

//TODO: receber agendamento como prop
const BookinItem = () => {
  return (
    <>
      <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">AGENDAMENTOS</h2>

      <Card>
        <CardContent className="flex justify-between p-0">
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold">Corte de cabelo</h3>

            <div className="flex items-center gap-2">
              <Avatar className="h-[6] w-[6]">
                <AvatarImage src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" />
              </Avatar>
              <p className="text-sm">Barbearia do ZÉ</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
            <p className="text-sm">Setembro</p>
            <p className="text-2xl">18</p>
            <p className="text-sm">14:00</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookinItem;