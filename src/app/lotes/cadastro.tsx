import { ChevronEsquerda } from "@assets/icons";
import Button from "@components/button";
import { ScrollView, Text, View } from "react-native";
import TextInput from "@components/text-input";
import { router } from "expo-router";
import * as yup from "yup";
import { Formik } from "formik";
import { AutoComplete } from "@components/auto-complete";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { findFazendasByQuery } from "src/services/fazendas.api";
import { FazendaDTO } from "src/types/dtos/fazenda.dto";
import { createLote } from "src/services/lotes.api";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";

const LoteSchema = yup.object().shape({
  nome: yup.string().required("Campo Obrigatório").default(""),

  quantidadeAnimais: yup
    .number()
    .typeError("Informe um número")
    .integer("Deve ser um número inteiro")
    .min(1, "Deve ser pelo menos 1")
    .required("Campo Obrigatório"),

  pastoId: yup
    .string()
    .uuid("Id do Pasto inválido"),

  fazendaId: yup
    .string()
    .uuid("Id da Fazenda inválido")
    .required("Campo Obrigatório"),
});

export default function CadastroLote() {
  const { fazendaId } = useLocalSearchParams<{ fazendaId: string }>()
  const [fazendaSelecionada, setFazendaSelecionada] = useState<
    FazendaDTO | undefined
  >();

  const defaultLote: Partial<yup.InferType<typeof LoteSchema>> = {
    nome: "",
    fazendaId: fazendaId,
    pastoId: "",
  };

  const {
    mutate: findFazendasByQueryFn,
    data: fazendasData,
    isPending: isFazendaPending,
  } = useMutation({
    mutationKey: ["create-lote", "fazendas"],
    mutationFn: findFazendasByQuery,
  });

  const { mutate: createLoteFn, isPending: isCreatingLote } = useMutation({
    mutationKey: ["create-lote"],
    mutationFn: createLote,
  });

  const onSubmit = async (
    data: Partial<yup.InferType<typeof LoteSchema>>
  ) => {
    try {
      if (data.pastoId === "") data.pastoId = undefined;
      await createLoteFn(data as yup.InferType<typeof LoteSchema>);
      router.navigate("/lotes");
    } catch (e) {
      console.error("Error creating lote:", e);
    }
  };

  return (
    <View className="flex-1 bg-white w-full py-4 px-6">
      <View className="flex flex-row w-full  justify-between">
        <Button
          Icon={<ChevronEsquerda />}
          variant="outline"
          onPress={() => router.navigate("/lotes")}
        />
        <Text className="text-base">Cadastrar Lote</Text>
        <Text></Text>
      </View>
      <ScrollView
        contentContainerClassName="w-full flex flex-1 flex-col gap-10 items-center justify-between"
        keyboardShouldPersistTaps="handled"
      >
        <Formik
          validationSchema={LoteSchema}
          onSubmit={onSubmit}
          initialValues={defaultLote as any}
        >
          {({ handleSubmit, setFieldValue, values, errors }) => (
            <>
              <View className=" w-full grid gap-2 md:grid-cols-2 lg:grid-cols-3 md:w-2/3">
                {/* Campo Nome */}
                <View className="w-full">
                  <Text className="mb-1">Nome do Lote</Text>
                  <TextInput
                    placeholder="Digite o nome do lote"
                    value={values.nome}
                    onChangeText={text => setFieldValue("nome", text)}
                  />
                  {errors.nome && (
                    <Text className="text-red-500 text-xs mt-1">{errors.nome}</Text>
                  )}
                </View>

                {/* Campo Quantidade de Animais */}
                <View className="w-full">
                  <Text className="mb-1">Quantidade de Animais</Text>
                  <TextInput
                    placeholder="Digite a quantidade de animais"
                    value={values.quantidadeAnimais?.toString() ?? ""}
                    onChangeText={text => setFieldValue("quantidadeAnimais", text.replace(/\D/g, ""))}
                    keyboardType="numeric"
                  />
                  {errors.quantidadeAnimais && (
                    <Text className="text-red-500 text-xs mt-1">{errors.quantidadeAnimais}</Text>
                  )}
                </View>

                <AutoComplete
                  title="Pasto"
                  options={
                    (fazendasData &&
                      fazendasData?.map((i) => {
                        return { label: i.nome, value: i.id };
                      })) ||
                    []
                  }
                  value={fazendaSelecionada?.id}
                  onChange={(value) => {
                    setFazendaSelecionada(
                      fazendasData?.find((i) => i.id === value)
                    );
                    setFieldValue("loteId", "");
                  }}
                  queryFn={(value) =>
                    findFazendasByQueryFn({
                      nome: value,
                    })
                  }
                  isQueryPending={isFazendaPending}
                />
              </View>

              <View className="flex flex-row justify-evenly w-full md:w-2/3">
                <Button
                  variant="solid"
                  color="secondary"
                  className="w-2/5 max-w-xs h-12"
                  text="Cancelar"
                  onPress={() => router.navigate("/lotes")}
                  disabled={isCreatingLote}
                  fullWidth
                />
                <Button
                  variant="solid"
                  color="main"
                  className="w-2/5 max-w-xs h-12"
                  text="Cadastrar"
                  onPress={() => handleSubmit()}
                  disabled={isCreatingLote}
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
