import { ChevronEsquerda } from "@assets/icons";
import Button from "@components/button";
import { ScrollView, Text, View } from "react-native";
import { router } from "expo-router";
import * as yup from "yup";
import { Formik } from "formik";
import { AnimalSexo, AnimalStatus } from "src/types/dtos/response/animal.dto";
import DatePicker from "@components/date-picker";
import { Select } from "@components/select";
import { AutoComplete } from "@components/auto-complete";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { findLotesByQuery } from "src/services/lotes.api";
import { findFazendasByQuery } from "src/services/fazendas.api";
import { FazendaDTO } from "src/types/dtos/fazenda.dto";
import { Checkbox } from "@components/checkbox";

const AnimalSchema = yup.object().shape({
  dataNascimento: yup.date().required("Campo Obrigatório").default(new Date()),
  vacinado: yup.boolean().required("Campo Obrigatório").default(false),
  status: yup
    .mixed<AnimalStatus>()
    .oneOf(Object.values(AnimalStatus))
    .required("Campo Obrigatório"),
  sexo: yup
    .mixed<AnimalSexo>()
    .oneOf(Object.values(AnimalSexo))
    .required("Campo Obrigatório"),
  loteId: yup
    .string()
    .uuid("Id de Lote inválido")
    .required("Campo Obrigatório"),
  maeId: yup.string().uuid("Id de Animal Inválido"),
});

const defaultAnimal = {
  dataNascimento: new Date(),
  vacinado: false,
  status: "",
  sexo: "",
  loteId: "",
  maeId: "",
};

export default function CadastroAnimais() {
  const [queryLotes, setQueryLotes] = useState("");
  const [queryFazendas, setQueryFazendas] = useState("");
  const [fazendaSelecionada, setFazendaSelecionada] = useState<
    FazendaDTO | undefined
  >();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const {
    mutate: findLotesByQueryFn,
    data: lotesData,
    isPending: isLotePending,
  } = useMutation({
    mutationKey: ["create-animal", "lotes", fazendaSelecionada?.id, queryLotes],
    mutationFn: findLotesByQuery,
  });

  const {
    mutate: findFazendasByQueryFn,
    data: fazendasData,
    isPending: isFazendaPending,
  } = useMutation({
    mutationKey: ["create-animal", "fazendas", queryFazendas],
    mutationFn: findFazendasByQuery,
  });

  return (
    <View className="flex-1 bg-white w-full py-4 px-6">
      <View className="flex flex-row w-full  justify-between">
        <Button
          Icon={<ChevronEsquerda />}
          variant="outline"
          onPress={() => router.navigate("/animais")}
        />
        <Text className="text-base">Cadastrar Animal</Text>
        <Text></Text>
      </View>
      <ScrollView
        contentContainerClassName="w-full flex flex-1 flex-col gap-10 items-center justify-between"
        keyboardShouldPersistTaps="handled"
      >
        <Formik
          validationSchema={AnimalSchema}
          onSubmit={onSubmit}
          initialValues={defaultAnimal}
        >
          {({ handleSubmit, setFieldValue, values, errors }) => (
            <>
              <View className=" w-full grid gap-2 md:grid-cols-2 lg:grid-cols-3 md:w-2/3">
                <AutoComplete
                  title="Fazenda"
                  options={
                    (fazendasData &&
                      fazendasData?.map((i) => {
                        return { label: i.nome, value: i.id };
                      })) ||
                    []
                  }
                  value={fazendaSelecionada?.id}
                  onChange={(value) =>
                    setFazendaSelecionada(
                      fazendasData?.find((i) => i.id === value)
                    )
                  }
                  queryFn={(value) =>
                    findFazendasByQueryFn({
                      nome: value,
                    })
                  }
                  isQueryPending={isFazendaPending}
                />
                <AutoComplete
                  disabled={!fazendaSelecionada?.id}
                  title="Lote"
                  options={
                    lotesData && lotesData.length > 0
                      ? lotesData.map((i) => {
                          return { label: i.nome, value: i.id };
                        })
                      : []
                  }
                  value={values.loteId}
                  required
                  onChange={(value) => setFieldValue("loteId", value)}
                  error={errors.loteId}
                  queryFn={(value) =>
                    findLotesByQueryFn({
                      nome: value,
                      fazendaId: fazendaSelecionada?.id,
                    })
                  }
                  isQueryPending={isLotePending}
                />
                <DatePicker
                  required
                  title="Data de Nascimento"
                  value={values.dataNascimento}
                  onChange={(date) => setFieldValue("dataNascimento", date)}
                  error={errors.dataNascimento}
                />
                <Checkbox
                  checked={values.vacinado}
                  onChange={(checked) => setFieldValue("vacinado", checked)}
                  label="Vacinado?"
                  labelPosition="top"
                />
                <Select
                  required
                  title="Sexo"
                  options={[
                    { label: "Macho", value: AnimalSexo.M },
                    { label: "Fêmea", value: AnimalSexo.F },
                  ]}
                  value={values.sexo}
                  onChange={(value) => setFieldValue("sexo", value)}
                  error={errors.sexo}
                />
                <Select
                  required
                  title="Status"
                  options={[
                    { label: "Morto", value: AnimalStatus.MORTO },
                    { label: "Vendido", value: AnimalStatus.VENDIDO },
                    {
                      label: "Na Propriedade",
                      value: AnimalStatus.PROPRIEDADE,
                    },
                    { label: "Vivo", value: AnimalStatus.VIVO },
                  ]}
                  value={values.status}
                  onChange={(value) => setFieldValue("status", value)}
                  error={errors.status}
                />
              </View>

              <View className="flex flex-row justify-evenly w-full md:w-2/3">
                <Button
                  variant="solid"
                  color="secondary"
                  className="max-w-xs h-12"
                  text="Cancelar"
                  onPress={() => router.navigate("/animais")}
                  fullWidth
                />
                <Button
                  variant="solid"
                  color="main"
                  className="max-w-xs h-12"
                  text="Cadastrar"
                  onPress={() => handleSubmit()}
                  fullWidth
                />
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}
