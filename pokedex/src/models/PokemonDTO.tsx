export interface InitialDTO {
  activePokemon: {};
        data: [
          {
            id: number;
            name: string;
            typename: [
              {
              type:{
                name: string;
              }
              }
            ]
            weight: number;
            height: number;
            habilities: [
              {
                name: string;
                base_stat: number;
              }
            ]
            moviments:   {     
                name: string;    
            }
            flavor: string;
          }
        ]

        loading: boolean;
        error: boolean;
}